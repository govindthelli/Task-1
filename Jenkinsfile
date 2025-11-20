pipeline {
    agent { label 'agent-label' }

    stages {
        stage('Run Index.js via ssh agent') {
            steps {
                sshagent(['ssh-agent']) {
                    sh '''
                        scp -o StrictHostKeyChecking=no ./index.js ubuntu@44.193.202.227:/home/ubuntu/
                        ssh -o StrictHostKeyChecking=no ubuntu@44.193.202.227 bash -c "pkill -f node || true; nohup node /home/ubuntu/index.js &"
                    '''
                }
            }
        }
    }
}
