const projectsToShow = ['#project-1', '#project-2', '#project-3', '#project-4']

const projectQueue = {
    projectShowing: 0,
    nextProject: 1,
    previousProject: -1
}

$('#right-arrow').on('click', () => {
    const {projectShowing, nextProject, previousProject} = projectQueue

    $('#left-arrow').show()

    $(projectsToShow[projectShowing]).hide()
    $(projectsToShow[nextProject]).show()

    Object.keys(projectQueue).forEach((value) => projectQueue[value]++)

    if (projectQueue.nextProject === projectsToShow.length) {
        $('#right-arrow').hide()
    }
})

$('#left-arrow').on('click', () => {
    const {projectShowing, nextProject, previousProject} = projectQueue

    $('#right-arrow').show()

    $(projectsToShow[projectShowing]).hide()
    $(projectsToShow[previousProject]).show()

    Object.keys(projectQueue).forEach((value) => projectQueue[value]--)

    if (projectQueue.previousProject === -1) {
        $('#left-arrow').hide()
    }
})

