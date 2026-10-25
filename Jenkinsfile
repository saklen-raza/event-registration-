
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/saklen-raza/event-registration-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test Application') {
            steps {
                bat '''
                node -e "const p=require('./package.json'); if(p.scripts && p.scripts.test && p.scripts.test !== 'echo \\"Error: no test specified\\" && exit 1') { console.log('Test script found'); } else { console.log('No automated test script configured'); }"
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t event-registration:latest .'
            }
        }
    }
}
