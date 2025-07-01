import { warn, debug, trace, info, error } from '@tauri-apps/plugin-log';

export class Logger {
	warn = warn;
	debug = debug;
	trace = trace;
	info = info;
	error = error;
}

export const logger = new Logger();

function forwardConsole(
	fnName: 'log' | 'debug' | 'info' | 'warn' | 'error',
	logger: (message: string) => Promise<void>
) {
	const original = console[fnName];
	console[fnName] = (message) => {
		original(message);
		logger(message);
	};
}

forwardConsole('log', trace);
forwardConsole('debug', debug);
forwardConsole('info', info);
forwardConsole('warn', warn);
forwardConsole('error', error);
