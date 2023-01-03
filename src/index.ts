import { asyncScheduler, fromEvent } from 'rxjs';
import { sampleTime, throttleTime, auditTime, delay, pluck, bufferTime, distinctUntilChanged } from 'rxjs/operators';

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    pluck('target', 'value'),
    //distinctUntilChanged()
).subscribe(console.log);


/************ 01 - sampleTime *************/

// input$.pipe(
//     sampleTime(1000),
//     pluck('target','value'),
//     distinctUntilChanged()
// ).subscribe(console.log);


/************ 02 - throttleTime *************/

// input$.pipe(
//     throttleTime(2000, 
//         asyncScheduler ,{
//         leading: true,
//         trailing: true }
//         ),
//     pluck('target', 'value'),
//     distinctUntilChanged()
// ).subscribe(console.log);

/************ 03 - auditTime *************/

// input$.pipe(
//     auditTime(2000),
//     pluck('target', 'value'),
//     distinctUntilChanged()
// ).subscribe(console.log);

/************ 04 - delay *************/

// input$.pipe(
//     delay(3000),
//     pluck('target', 'value')
// ).subscribe(console.log);

/************ 06 - bufferTime *************/

// input$.pipe(
//     bufferTime(2000)
// ).subscribe(console.log);