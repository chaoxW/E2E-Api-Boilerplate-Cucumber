node {
    properties([
        buildDiscarder(
            logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')
        )
    ])
    docker.image('node:16').inside("-v /etc/passwd:/etc/passwd -e 'HOME=${env.WORKSPACE}'") {
        stage('test: e2e') {
            motork.checkOutFromOrigin('e2e-api-boilerplate-cucumber', 'master')

            sh 'npm install'

            sh 'npm run build'

            try {
                sh 'npm run test'
            } finally {
                sh 'npm run report'
                archiveArtifacts artifacts: 'reports/html/*'
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: false,
                    reportDir: 'reports/html',
                    reportFiles: 'index.html',
                    reportName: 'E2E Test Report',
                    reportTitles: ''
                ])
            }
        }
    }
}
