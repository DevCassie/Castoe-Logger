const Logger = require('./src/Transports/index.js');
/* 
const castoeLog = new Logger.File({
	file: 'file.txt',
	automatic: true,
	overwrite: true,
});
castoeLog.send('Testing'); */

const castoeConsole = new Logger.Console({
	name: 'Castoe console',
	showType: true,
	traceFile: false
});

const x = false;

castoeConsole.send(x);

castoeConsole.send(() => { return castoeConsole.send(true)});