pipeline {
    agent any
    stages {
        stage('Collin Update Repo') {
            steps {
                build job: 'collin-update-repo'
            }
        }
        stage('Collin Deploy Kong') {
            steps {
                build job: 'collin-deploy'
            }
        }
        stage('Collin Configure Kong') {
            steps {
                build job: 'collin-configure-kong'
            }
        }
    }
}