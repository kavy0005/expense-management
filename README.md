## Video presentation link https://drive.google.com/file/d/1Mf-4LdLrn6-0f3EzIdS_9hUrIomval3H/view?usp=drive_link



Expense Management App

A full-stack Expense Management application that automates expense submission and multi-level approvals with flexible conditional rules and OCR-based receipt parsing.

This repository contains a backend (Node.js / Express API), a frontend (React), database schema and seed SQL, and documentation.

## Problem Statement

Companies often struggle with manual expense reimbursement processes that are time-consuming, error-prone, and lack transparency. There is no simple way to:

- Define approval flows based on thresholds.
- Manage multi-level approvals.
- Support flexible conditional approval rules.

This project implements a solution that supports:

- Authentication and user management (Admin, Manager, Employee).
- Expense submission with multi-currency support.
- Multi-step approval workflows with configurable approvers and conditional rules (percentage-based, specific approver, hybrid).
- OCR-powered receipt parsing to auto-populate expense details.

## Team

Team Name : DevMatrix

Team Leader

- Name: Kavya Mishra
  - Email: kavyaman2005@gmail.com
  - Phone: 8302573401
  - Passing Year: 2027

Team Members

- Name: Balkrishna Shukla
  - Email: balkrishnashukla66@gmail.com
  - Phone: 9569582981
  - Passing Year: 2027

- Name: Pulkit Kumawat
  - Email: pulkitkumawat2005@gmail.com
  - Phone: 6375753405
  - Passing Year: 2027

- Name: Jay Kumar
  - Email: jaykumarjat.2004@gmail.com
  - Phone: 9148006354
  - Passing Year: 2027
## Reviewer

- Aman Patel
  
## How to Start
- Start with  running index.html
  
## Core Features

- Authentication & User Management
	- On first signup/login a Company and Admin user are auto-created (company currency defaults to selected country's currency).
	- Admins can create employees and managers, assign roles, and define manager relationships.

- Expense Submission (Employee)
	- Submit expenses with amount (allowing other currencies), category, description, date, and attachments.
	- View personal expense history and statuses (Approved, Rejected, Pending).

- Approval Workflow (Manager/Admin)
	- Multi-step approvals with configurable sequence (Manager → Finance → Director, etc.).
	- Managers can view pending approvals, approve/reject with comments.

- Conditional Approval Flow
	- Percentage rule (e.g., 60% of approvers approve → approved).
	- Specific approver rule (e.g., CFO approval auto-approves).
	- Hybrid rule (percentage OR specific approver).

- OCR for receipts
	- Upload/scan receipts and auto-extract amount, date, merchant, description, and line items.



