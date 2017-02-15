pipeline {
    agent any
    tools {
        nodejs 'Node 6.9.5'
    }
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