pipeline {
    agent any
    triggers {
        pollSCM('H/5 * * * *')  // Poll SCM toutes les 5 minutes
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME_SERVER = 'username/mern-server'  // Remplacez 'username' par votre nom d'utilisateur Docker Hub
        IMAGE_NAME_CLIENT = 'username/mern-client'  // Remplacez 'username' par votre nom d'utilisateur Docker Hub
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sanagouissemlakhal/Mern_project.git',
                    credentialsId: 'Gitlab_ssh'
            }
        }
        stage('Build Server Image') {
            steps {
                dir('server') {
                    script {
                        dockerImageServer = docker.build("${IMAGE_NAME_SERVER}:latest")  // Ajout du tag 'latest'
                    }
                }
            }
        }
        stage('Build Client Image') {
            steps {
                dir('client') {
                    script {
                        dockerImageClient = docker.build("${IMAGE_NAME_CLIENT}:latest")  // Ajout du tag 'latest'
                    }
                }
            }
        }
        stage('Scan Server Image') {
            steps {
                script {
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
                    aquasec/trivy:latest image --exit-code 0 --severity LOW,MEDIUM,HIGH,CRITICAL \\
                    ${IMAGE_NAME_SERVER}:latest  // Ajout du tag 'latest'
                    """
                }
            }
        }
        stage('Scan Client Image') {
            steps {
                script {
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
                    aquasec/trivy:latest image --exit-code 0 --severity LOW,MEDIUM,HIGH,CRITICAL \\
                    ${IMAGE_NAME_CLIENT}:latest  // Ajout du tag 'latest'
                    """
                }
            }
        }
        stage('Push Images to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', "${DOCKERHUB_CREDENTIALS}") {
                        dockerImageServer.push()  // Pousse l'image vers Docker Hub
                        dockerImageClient.push()  // Pousse l'image vers Docker Hub
                    }
                }
            }
        }
    }
}
