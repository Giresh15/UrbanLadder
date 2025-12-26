FROM tomcat:9.0-jdk8

# Remove default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy WAR to Tomcat
COPY target/urbanladder-1.0.0.war /usr/local/tomcat/webapps/ROOT.war

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
