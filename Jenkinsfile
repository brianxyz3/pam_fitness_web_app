pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-west-1'
        FRONTEND_ECR = '849349795052.dkr.ecr.eu-west-1.amazonaws.com/pam_fitness_app_frontend' // to be editted
        FRONTEND_EC2 = 'ec2-user@FRONTEND-EC2-PUBLIC-IP' // to be editted
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/brianxyz3/pam_fitness_web_app.git'
            }
        }

        stage('Build Frontend') {
            agent {
                docker {
                    image "node:18-alpine"
                    reuseNode true
                }
            }
            steps {
                script {
                    sh """
                    npm ci
                    npm run build
                    """
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    sh "docker build -t pam-fitness-frontend ."
                }
            }
        }

        // stage('Login to ECR') {
        //     steps {
        //         script {
        //             sh """
        //             aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $FRONTEND_ECR
        //             """
        //         }
        //     }
        // }

        // stage('Tag & Push Images') {
        //     steps {
        //         script {
        //             sh """
        //             docker tag pam-fitness-frontend:latest $FRONTEND_ECR:latest

        //             docker push $FRONTEND_ECR:latest
        //             """
        //         }
        //     }
        // }

        // stage('Deploy to EC2') {
        //     steps {
        //         script {
        //             withCredentials([sshUserPrivateKey(credentialsId: 'ec2-ssh-key', keyFileVariable: 'KEY')]) {

        //                 // FRONTEND DEPLOY
        //                 sh """
        //                 ssh -o StrictHostKeyChecking=no -i $KEY $FRONTEND_EC2 '
        //                     sudo docker pull $FRONTEND_ECR:latest
        //                     sudo docker stop frontend || true
        //                     sudo docker rm frontend || true
        //                     sudo docker run -d --name frontend -p 80:80 $FRONTEND_ECR:latest
        //                 '
        //                 """
                        
        //             }
        //         }
        //     }
        // }
    }
}
