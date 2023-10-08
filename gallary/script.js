var tl = gsap.timeline({scrollTrigger:{
    trigger : '#main',
    start: '50% 50%',
    end: '100% 50%',
    scrub: 2,
    pin: true,
    markers: true
}})

tl
.to('#top',{
    top: '-50%',
},'a')
.to('#bottom',{
    bottom: '-50%',
},'a')
.to('#top-h',{
    top: '80%',
},'a')
.to('#bottom-h',{
    bottom: '-80%',
},'a')
.to('#content',{
    marginTop: '0%'
})