Lead Management CRM - Frontend Assignment
Project Overview
A clean and responsive Lead Management UI built with React.js and Bootstrap 5, simulating a basic Real Estate CRM system.

Tech Stack
React 18.2 - For building the user interface

React Router DOM 6.8 - For moving between pages

Bootstrap 5 - For styling and responsive design

React Bootstrap - Bootstrap components ready for React

Bootstrap Icons - For icons throughout the app

React Toastify - For pop-up notifications

How to Set Up
What you need installed
Node.js (version 14 or higher)

npm (comes with Node.js)

Steps to run the project
bash
# 1. Download the project
git clone https://github.com/chetan9265/CRM-App.git

# 2. Go into the project folder
cd lead-management-crm

# 3. Install all required packages
npm install

# 4. Start the app
npm start
After running these commands, the app will open automatically at http://localhost:3000

Folder Structure
text
src/
├── components/
│   ├── AddLead.jsx           # Form for adding new leads
│   ├── EditModal.jsx         # Popup for editing leads
│   └── Layout.jsx            # Sidebar and navbar together
├── pages/
│   ├── Login.jsx             # Login screen
│   ├── Dashboard.jsx         # Main dashboard with stats
│   └── Leads.jsx             # Table showing all leads
├── App.js                    # Sets up all routes
└── index.js                  # Starting point
Features Implemented
Login Page
Email and password fields with validation

Both fields are required

Clicking login takes you to the dashboard

Clean and simple design with proper spacing

Dashboard
Shows three statistics cards:

Total Leads - 14

New Leads - 5

Converted Leads - 3

Sidebar to navigate between pages

Top navbar with the app name

Leads Table
Displays leads with columns:

Name

Phone

Email

Source

Status

Actions

Three example leads come pre-loaded

Table is responsive and scrolls on mobile

Search Functionality
Type in the search box to filter leads by name

Filters results in real-time as you type

Case-insensitive search

Status Badges
Each status has a different color:

New - Green badge

Followup - Yellow badge

Converted - Blue badge

Add New Lead
Click the "Add Lead" button to open the form

Form fields:

Name (required)

Phone (required, 10 digits)

Email (required, valid format)

Source dropdown (99acres, Magicbricks, Facebook, Website)

Status dropdown (New, Followup, Converted, Lost)

Real-time validation with error messages

Submit button stays disabled until all fields are valid

Success message appears when lead is added

Edit Lead
Click the edit button on any row

Modal opens with current information pre-filled

Make changes and click save

Success message appears when updated

Delete Lead
Click the delete button on any row

Confirmation popup asks "Are you sure?"

Click Yes to delete, No to cancel

Success message appears when deleted

Layout Component
Combines sidebar and navbar into one reusable component

Used on both Dashboard and Leads pages

Highlights which page you are currently on

Toast Notifications
Green - Success (lead added, updated, deleted)

Yellow - Warning (delete confirmation)

Red - Error (validation failed)

Empty State
When no leads match the search or all leads are deleted

Shows "No leads found" message

Fully Responsive
Works on phones, tablets, and desktops

Sidebar collapses on smaller screens

Table scrolls horizontally on mobile

Cards stack vertically on small devices

How to Use the App
Step 1: Log in
Email: anything@example.com

Password: anything with 6 or more characters

Click the Login button

Step 2: View Dashboard
See the three statistics cards

Click "Leads" in the sidebar to manage leads

Step 3: Work with Leads
Action	How to do it
View all leads	Scroll through the table
Find a lead	Type name in search box
Add a lead	Click "Add Lead" button, fill form, submit
Edit a lead	Click edit button, update info, save
Delete a lead	Click delete button, confirm deletion
Features Checklist
Login page with validation

Dashboard with three stats cards

Sidebar and navbar in one Layout component

Leads table with sample data

Real-time search filter

Color-coded status badges

Add lead form with validation

Edit lead modal

Delete with confirmation

Toast notifications for all actions

Empty state message

Fully responsive design

Responsive Behavior
Mobile: Cards stack vertically, sidebar collapses, table scrolls horizontally

Tablet: Two cards per row, sidebar shows icons and text

Desktop: Full layout with all features visible

Dependencies
json
{
  "bootstrap": "^5.2.3",
  "bootstrap-icons": "^1.10.3",
  "react": "^18.2.0",
  "react-bootstrap": "^2.7.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "react-toastify": "^11.0.5"
}



