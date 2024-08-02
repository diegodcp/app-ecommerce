import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LogLevel } from '../config/loglevel.enum';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {
    readonly minLogLevel = environment.MIN_LOG_LEVEL ?? LogLevel.NEVER;

    canLog(logLevel: LogLevel): boolean {
        return logLevel >= this.minLogLevel;
    }

    withDate(template: string): string {
        return `${new Date().toLocaleTimeString()} | ${template}`;
    }

    info(template: string, ...optionalParams: any[]): void {
        if (!this.canLog(LogLevel.INFO)) return;
        console.log(this.withDate(template), ...optionalParams);
    }

    warning(template: string, ...optionalParams: any[]): void {
        if (!this.canLog(LogLevel.WARNING)) return;
        console.warn(this.withDate(template), ...optionalParams);
    }

    error(template: string, ...optionalParams: any[]): void {
        if (!this.canLog(LogLevel.ERROR)) return;
        console.error(this.withDate(template), ...optionalParams);
    }

}