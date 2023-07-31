const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
 ])

//1
 const set = [...new Set(gameEvents.values())];
 console.log(set);
 
 //2
 gameEvents.delete(64);

 //3
 console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

 //4
 for(const [min,events] of gameEvents ){
  const half= min<=45 ?'First':'Second';
  console.log(`[${half} Half] ${min}: ${events}`)
 }


/*(4) ["⚽ GOAL", "� Substitution", "� Yell...]
0
:
"⚽ GOAL"
1
:
"� Substitution"
2
:
"� Yellow card"
3
:
"� Red card"
[[Prototype]]
:
[]
2.
An event happened, on average, every 9 minutes

3.
[First Half] 17: ⚽ GOAL
[First Half] 36: � Substitution
[Second Half] 47: ⚽ GOAL
[Second Half] 61: � Substitution
[Second Half] 69: � Red card
[Second Half] 70: � Substitution
[Second Half] 72: � Substitution
[Second Half] 76: ⚽ GOAL
[Second Half] 80: ⚽ GOAL
[Second Half] 92: � Yellow card */
