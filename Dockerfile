# Select a base image that includes Python
FROM python:3.8-slim

# Set up a working directory in the container for your application
WORKDIR /backend

# Copy the backend code into the container
COPY . /backend



# Expose the port the app runs on
EXPOSE 8080

# Set the command to run your application
# (Be sure to replace './your_app_script.py' with the relative path to the Python file that starts your application)
CMD ["node", "./index.js"]