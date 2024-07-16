
# Cloud Resume Challenge - Azure

## Project Overview

This project is a part of the Cloud Resume Challenge, where the goal was to build and deploy a portfolio website with a visitor counter. The challenge involves multiple cloud services and tools to achieve a robust, secure, and scalable solution.
### Architecture
![archi](/images/resume%20architecture.png)
### Features

- **Visitor Counter**: Implemented using Azure Functions, Python, and Cosmos DB to track and display the number of visitors.
- **Static Website**: Deployed on Azure Blob Storage, ensuring high availability and reliability.
- **Global Reach**: Integrated with cloudflare for faster content delivery across the globe.
- **Secure Delivery**: Configured secure HTTPS delivery for a custom domain using Cloudflare CDN, including SSL certificate management and HTTPS redirect rules.
- **Performance Optimization**: Achieved a 50% reduction in page load times through CDN integration and optimization techniques.
- **CI/CD Pipeline**: Established a continuous integration and deployment pipeline using GitHub Actions to automate updates and deployments for Azure Storage and Functions.

## Tools and Technologies

- **Azure Functions**: Serverless compute service used to run the backend code for the visitor counter.
- **Cosmos DB**: Globally distributed database service used to store and retrieve visitor data.
- **Azure Storage**: Used for hosting the static website files.
- **Python**: Backend language for the Azure Functions.
- **JavaScript**: Used for front-end development.
- **Cloudflare**: CDN and DNS management for secure and fast content delivery.
- **GitHub Actions**: CI/CD tool used to automate the deployment process.

## Project Steps

### 1. Setting Up Azure Services

1. **Create Azure Blob Storage**:
   - Set up a new storage account in Azure.
   - Create a container for static website hosting.
   - Enable static website hosting in the storage account settings.
   
2. **Create Azure Functions**:
   - Set up a new Function App in Azure.
   - Write and deploy Python code for the visitor counter.
   - Integrate the Function App with Cosmos DB.

3. **Set Up Cosmos DB**:
   - Create a new Cosmos DB account.
   - Create a database and a container to store visitor data.

### 2. Front-End Development

1. **HTML/CSS/JavaScript**:
   - Develop a static HTML page for the portfolio.
   - Style the page using CSS.
   - Add JavaScript code to fetch and display the visitor count.

### 3. Integrate Cloudflare CDN

1. **Configure Custom Domain**:
   - Purchase a custom domain (if not already owned).
   - Configure DNS settings in Cloudflare.
   
2. **Set Up HTTPS**:
   - Enable SSL/TLS in Cloudflare.
   - Configure HTTPS redirect rules.
   
3. **Optimize Delivery**:
   - Enable caching and other performance optimization settings in Cloudflare.

### 4. CI/CD Pipeline with GitHub Actions

1. **Set Up Repository**:
   - Create a GitHub repository for the project.
   - Push all project files to the repository.

2. **Create GitHub Actions Workflow**:
   - Define a workflow YAML file to automate the deployment process.
   - Set up triggers for code push and pull request events.
   - Add steps to build, test, and deploy updates to Azure Storage and Azure Functions.

### 5. Deployment and Testing

1. **Deploy Static Website**:
   - Deploy the static website files to Azure Blob Storage.
   - Verify the website is accessible via the custom domain.
   
2. **Deploy Azure Functions**:
   - Deploy the Python code to Azure Functions.
   - Test the visitor counter functionality.

3. **Monitor and Optimize**:
   - Use Azure Application Insights and Cloudflare analytics to track performance and usage.
   - Make necessary adjustments to improve performance and reliability.

## Conclusion

By completing the Cloud Resume Challenge, I demonstrated proficiency in using Azure services, serverless computing, and CI/CD pipelines. This project showcases my ability to build and deploy a fully functional, secure, and performant web application using modern cloud technologies.

## Author

[Chiheb Khemiri](https://www.chiheb-khemiri.tech)
