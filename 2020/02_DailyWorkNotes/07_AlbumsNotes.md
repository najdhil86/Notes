## Emails

From Mike Humphrey on 09/15/20

Hey all,

As most of you know, we've had some meetings to discuss some potential changes to the scope & design of the Albums feature. After those conversations, this is where we're at currently:

Goals & Rewards are delayed - to make sure that the goals/rewards are as impactful as possible, we're going to hold off on releasing them until early '21 in a v.2 release; this gives the Design/Product/Content teams more time to come up with impactful rewards for players

Video unlock removed from Goals & Rewards system - instead of unlocking the video as part of the Goals & Rewards system, we'll be tying it to completion of X challenges in each album (global config-defined), silently triggered when the player completes that # of rooms

Albums will include past designs - there was a miscommunication about whether past designs would be sorted into non-All Designs albums; with this change, we can take all designs done prior to release of the Albums feature, and sort them into the appropriate albums, including past Series entries; this is going to require additional backend work, but with the reduced scope in other areas, Will and Aaron think this should be doable within the current release schedule

Possible UI change to Designs tab - we're removing the rewards from all non-Challenge Albums (so Series, Homes and My Albums will not have goals or grant rewards); Hailey & Barlow are exploring the possibility of some sort of UI indicator to show/explain which album categories give rewards and which don't - front-end engineering team have indicated that this is a relatively trivial addition if we want to move forward with it

I think that covers what we discussed today. If I missed any items, please feel free to chime in and reply!

## Slack Notes

## Test Cases

### Profile

- Swiping up, the user will see the tertiary tab lock in place (Profile image and user details hidden)

### Album Structure

**Album Categories**

- Under the Design Tab of the Profile screen, the user will see the following descending Album Categories:

  - Challenge Album
  - Series Album
  - Home Album
  - My Album

- Within in each album category, the user will see horizontally displayed albums. The order will be defined within **CMS**
- The user can swipe left or right to view all albums within each category
- At the bottom of each album, the user will see total number of challenge entries

- All Designs will appear in the champion format followed by challenge types

-

### All Designs Album

- All Designs includes all design entries have completed
- The user will see all past, in-voting, awaiting challenges
- At the top view, the user will see the four most recent entries displayed along with their status, time remaining until voting is complete, the awaiting tag, or the star score for an entry that has already had its results inbox message viewed

-*Make individual testcase for past, in-awaiting, past challenges*

### Design Layout

**Steps**

1. Navigate to Profile
2. Tap on Designs Tab
3. Observe

**Expected Results**

- Under the Design Tab of the Profile screen, the user will see the following descending Album Categories:

  - Challenge Album
  - Series Album
  - Home Album
  - My Album

- Within in each album category, the user will see horizontally displayed albums. The order will be defined within **CMS**
- The user can swipe left or right to view all albums within each category
- Total number challenge entries below Album preview cover
- Swipes up to view the albums in the Profile page, the top module of the profile slides up the Designs/Inventory/Inbox tertiary header locks to the top of the screen under the  secondary header that has keys and home points
- All Designs will always appear full-screen width champion format
- The user will see four most recent entries displayed along with their status
- Tapping on any challenge preview on album covers opens the album allowing the user view all design entries that qualify for the album

### Challenge Albums

**All Design Albums**
----

- On the design tab, the user will see a full width champion format of the four most recent entries displayed along with their status displayed above all available challenge album types
- Awaiting results challenges, In-Voting challenges, and past challenges appear with appropiate tags

**Challenge Types**
----

In addition to the All Designs album,

- Bedrooms
- Dining Rooms
- Living Rooms
- Kids Rooms & Nurseries
- Outdoors
- Five Stars
- Elites

- Album with the most recently added design should appear in the 1st (leftmost) slot, the album with the second most recently added design should appear in the 2nd slot, and so on

---

**09/23/20**

- [Spec](https://docs.google.com/document/d/1NwoSnz7H-QeBPQsvzmiZNeUHO6nXw49Rt8U0K3P2Qg0/edit)
- [Mockup](https://xd.adobe.com/view/d01b26c4-b18d-46eb-75d7-5f83f274121e-a62a/)
- [Jira Ticket](https://crowdstar.jira.com/browse/HOME-8576)

Per Jason

There are two configs that control the tabs you see on the profile screen.
12:54
CLIENT_PROFILE_MY_USER_TABS and CLIENT_PROFILE_FOREIGN_USER_TABS

12:54
Each of them is a list of numbers where each number corresponds to the different types of tabs you could see.
12:55
The description in CMS on those configs shows the numbers and their corresponding tab.
12:55
You’ll want to change those lists to include the album tab number if you want the album feature to be visible.
12:56
Additionally, ALBUM_ENABLE_FAVORITE_BUTTON is a simple toggle that determines whether or not to allow the favorites button to appear on the design info screen.

ALBUM_ENABLE_FAVORITE_BUTTON

User Profile:
Albums ON:  CLIENT_PROFILE_MY_USER_TABS = [4,2,3]
Albums OFF: CLIENT_PROFILE_MY_USER_TABS = [0,2,3]
Foreign Profile:
Albums ON: CLIENT_PROFILE_FOREIGN_USER_TABS = [4]
Albums OFF: CLIENT_PROFILE_FOREIGN_USER_TABS = [0,1]

Within Albums View

- Within the Album, challenge entries will be sorted from recent to oldest designs
- Total number entries match the number displayed in the upper right corner of album view

**09/24/20**

- The user successfully logs into their account with no UI issues within Albums
- All Albums appear sorted correctly

**All Design Albums**
----

- The user will see a full width champion format of the four most recent entries displayed along with their status displayed above all available challenge album types
- Awaiting results challenges, In-Voting challenges, and past challenges appear with appropiate tags
  
  - Bedrooms
  - Dining Rooms
  - Living Rooms
  - Kids Rooms & Nurseries
  - Outdoors
  - Five Stars
  - Elites

Resources
================

- [Spec](https://docs.google.com/document/d/1NwoSnz7H-QeBPQsvzmiZNeUHO6nXw49Rt8U0K3P2Qg0/edit)
- [Mockup](https://xd.adobe.com/view/d01b26c4-b18d-46eb-75d7-5f83f274121e-a62a/)
- [Jira Ticket](https://crowdstar.jira.com/browse/HOME-8576)

---

Notes

================

-

Configs
================

- Albums feature is on for User's Profile. Refer to [C2159667] for config setup

09/28/20

Resources
================

[Server-side Confluence](https://crowdstar.jira.com/wiki/spaces/CH/pages/1172897822/Penguin+Integration)
[Jira Ticket](https://crowdstar.jira.com/browse/HOME-7992)

Notes
================

- This will require active ab test and campaigns
- Requires Access to Penguin

Configs
================

- FEATURE_PENGUIN
