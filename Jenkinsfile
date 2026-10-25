
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Fetching code from GitHub...'
                git branch: 'master',
                    url: 'https://github.com/saklen-raza/event-registration-.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Checking project files...'
                sh '''
                    test -f index.html
                    test -f style.css
                    test -f script.js
                    test -f Dockerfile
                    echo "All required files found."
                '''
                echo 'Building Docker image...'
                sh 'docker build -t event-registration:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application files...'
                sh '''
                    test -s index.html
                    test -s style.css
                    test -s script.js
                    grep -qi "<form" index.html
                    echo "Basic tests passed."
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Event Registration application...'
                sh '''
                    docker rm -f event-registration || true
                    docker run -d \
                        --name event-registration \
                        -p 8082:80 \
                        event-registration:latest
                    docker ps
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
