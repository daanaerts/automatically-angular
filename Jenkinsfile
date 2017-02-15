pipeline {
    agent any
    stages {
        stage('pretest') {
            steps {
                sh 'npm -v'
                sh 'node -v'
            }
        }
        stage('build') {
            steps {
                sh 'npm install'
                sh './node_modules/.bin/ng build'
            }
        }
    }
}