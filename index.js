const MOTES = [18, 22]
module.exports = function NoMoteCancel(d) {
d.hook('C_CANCEL_SKILL', 3, (e) => {
if(d.game.me.class == 'elementalist' && MOTES.includes(Math.floor(e.skill.id / 10000))){
return false
}
})
}