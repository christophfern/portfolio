# Base image
FROM openjdk:19-jdk-alpine

RUN echo "hello world"
# Set working directory
WORKDIR /app

# Copy application JAR file and configuration files
COPY build/libs/portfolio-0.0.1-SNAPSHOT.jar /app

# Expose the port used by the application
EXPOSE 8080

# Run the application when the container starts
CMD ["java", "-jar", "portfolio-0.0.1-SNAPSHOT.jar"]