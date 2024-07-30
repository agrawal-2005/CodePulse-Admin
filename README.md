# CodePulse Admin Dashboard

## Overview

**CodePulse Admin Dashboard** is a React-based web application that serves as an admin interface for managing posts and content. It leverages Appwrite for backend operations such as document management and file storage.

## Features

- **Post Management**: Create, update, and delete posts.
- **File Management**: Upload and manage featured images for posts.
- **Rich Text Editor**: Use TinyMCE for rich text editing in posts.
- **Real-time Updates**: Automatically update slugs based on post titles.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Appwrite
- **Rich Text Editor**: TinyMCE

## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Appwrite Account

### Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Appwrite**:

   Create a configuration file `conf/conf.js` and add your Appwrite credentials:
   ```javascript
   const conf = {
     appwriteurl: 'https://<appwrite-endpoint>',
     appwriteProjectId: '<project-id>',
     appwriteDatabaseId: '<database-id>',
     appwriteCollectionID: '<collection-id>',
     appwriteBucketID: '<bucket-id>'
   };

   export default conf;
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

   Your application will be available at `http://localhost:5173`.

## Usage

### PostForm Component

The `PostForm` component allows for creating and updating posts. It uses `react-hook-form` for form handling and integrates with Appwrite for backend operations.

#### Features

- **Title**: Input for the post title.
- **Slug**: Automatically generated from the title.
- **Content**: Rich text editor for post content.
- **Featured Image**: Upload an image to be associated with the post.
- **Status**: Select the status of the post (active or inactive).

### RTE Component

The `RTE` (Rich Text Editor) component integrates TinyMCE for content editing.

#### Setup

Ensure you have a valid TinyMCE API key. You can sign up for an API key at [TinyMCE](https://www.tiny.cloud/).

```javascript
import { Editor } from "@tinymce/tinymce-react";
```

## Code Structure

- `src/`: Contains all source code.
  - `components/`: React components.
    - `Logo.jsx`: Component for displaying a logo.
    - `PostForm.jsx`: Component for managing posts.
    - `RTE.jsx`: Rich text editor component.
  - `appwrite/`: Appwrite service configuration.
    - `config.js`: Configuration file for Appwrite.
  - `index.jsx`: Entry point for the React application.
- `public/`: Contains static assets such as images.
  - `logo-color.png`: Logo image.

## Error Handling

### Appwrite Exceptions

Ensure your user has the necessary permissions in Appwrite. Check roles and API keys if you encounter authorization errors.

### TinyMCE API Key

If you see an error related to TinyMCE, ensure you have a valid API key and update it in the TinyMCE configuration.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.