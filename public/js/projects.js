$.mobile.loading().hide()

const projectsToShow = ['#project-1', '#project-2', '#project-3', '#project-4']
const dots = ['#dot-1', '#dot-2', '#dot-3', '#dot-4']

const projectQueue = {
    projectShowing: 0,
    nextProject: 1,
    previousProject: -1
}

$('#right-arrow').on('click', () => {
    goToNextProject()
})

$('#left-arrow').on('click', () => {
    goToPreviousProject()
})

$('.projects').on('swipeleft',(e) => {
    goToNextProject()
})

$('.projects').on('swiperight', (e) => {
    goToPreviousProject()
})

const goToNextProject = () => {
    const {projectShowing, nextProject} = projectQueue

    if (nextProject === projectsToShow.length) return

    $('#left-arrow').show()

    $(projectsToShow[projectShowing]).animate({left: -100, opacity: "hide"}, 300)
    $(projectsToShow[nextProject]).delay(200).animate({right: 0, opacity: "show"}, 300)

    $(dots[projectShowing]).fadeTo(600, .4)
    $(dots[nextProject]).fadeTo(600, 1)

    Object.keys(projectQueue).forEach((value) => projectQueue[value]++)

    if (projectQueue.nextProject === projectsToShow.length) {
        $('#right-arrow').hide()
    }
}

const goToPreviousProject = () => {
    const {projectShowing, previousProject} = projectQueue

    if (previousProject === -1) return

    $('#right-arrow').show()

    $(projectsToShow[projectShowing]).animate({right: -100, opacity: "hide"}, 300)
    $(projectsToShow[previousProject]).delay(100).animate({left: 0, opacity: "show"}, 300)

    $(dots[projectShowing]).fadeTo(600, .4)
    $(dots[previousProject]).fadeTo(600, 1)

    Object.keys(projectQueue).forEach((value) => projectQueue[value]--)

    if (projectQueue.previousProject === -1) {
        $('#left-arrow').hide()
    }
}
