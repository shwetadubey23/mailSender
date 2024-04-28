# MailSender
link https://mail-sender-git-doneee-aman0246.vercel.app/

![image](https://github.com/Aman0246/MailSender/assets/130737436/47e641aa-8f0b-440d-8833-5b5e3832af0a)


![image](https://github.com/Aman0246/MailSender/assets/130737436/b39006de-4633-466d-a58b-1c52c4fbda76)


##dark modeenable
![image](https://github.com/Aman0246/MailSender/assets/130737436/a3c0bb39-cad1-4558-ae86-ab4781092ee4)

# Gmail Sender Project

This project allows users to send Gmail messages through a company Gmail account. It combines both frontend and backend components to enable users to send emails via a user-friendly interface.

## Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following prerequisites installed:

- Node.js: Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Aman0246/MailSender.git
   ```

2. Change into the project directory:

   ```shell
   cd gmail-sender
   ```

3. Install frontend and backend dependencies:

   ```shell
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

### Configuration

Before running the application, you'll need to configure your Gmail account credentials. Create a `.env` file in the `backend` directory and add the following environment variables:

```env
GMAIL_USER=yourcompanyemail@gmail.com
GMAIL_PASS=yourcompanypassword
```

**Note:** It's essential to use a dedicated company Gmail account for sending emails.

## Usage

To start the application, you'll need to run both the frontend and backend components.

### Frontend

To start the frontend, run the following command from the project root directory:

```shell
cd frontend
npm run dev
```

The frontend will be accessible at `http://localhost:5731` by default.

### Backend

To start the backend, run the following command from the project root directory:

```shell
cd backend
npm start
```

The backend will be running at `http://localhost:7000` by default.

## Technologies Used

### Frontend

- React
- Material-UI
- Axios
- React Router
- Emotion
- Framer Motion
- Validator
- React Hot Toast

### Backend

- Node.js
- Express.js
- Mongoose
- Nodemailer
- Cors
- Dotenv

## Contributing

If you'd like to contribute to this project, please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.



## Acknowledgments

Special thanks to the open-source community and the authors of the libraries and frameworks used in this project.

Feel free to customize and improve this README to suit your project's specific needs.

