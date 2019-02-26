pipeline {
    agent any
    stages {
        stage('Collin Clone Repo') {
            steps {
                build job: 'collin-clone-repo'
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