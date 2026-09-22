/************* 
 * Rtv2 *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'RTV2';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
const pruebasLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pruebasLoopBegin(pruebasLoopScheduler));
flowScheduler.add(pruebasLoopScheduler);
flowScheduler.add(pruebasLoopEnd);


flowScheduler.add(CierreRoutineBegin());
flowScheduler.add(CierreRoutineEachFrame());
flowScheduler.add(CierreRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'CONDICIONES.csv', 'path': 'CONDICIONES.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + ((((("data/" + expInfo["participant"]) + "_") + expName) + "_") + expInfo["date"]));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var text;
var key_resp;
var NumerosClock;
var Prueba;
var prueba_resp;
var CierreClock;
var despedida;
var si;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'A continuación, usted verá distintos números, si el número es mayor a 5, por favor presione la flecha hacia la derecha en el teclado, si el número es menor a 5, presione la flecha hacia la izquierda, si el número es 5, presione la tecla espacio, muchas gracias\n\nPresione la tecla espacio para iniciar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Numeros"
  NumerosClock = new util.Clock();
  Prueba = new visual.TextStim({
    win: psychoJS.window,
    name: 'Prueba',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  prueba_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Cierre"
  CierreClock = new util.Clock();
  despedida = new visual.TextStim({
    win: psychoJS.window,
    name: 'despedida',
    text: 'Gracias por participar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  si = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var WelcomeMaxDurationReached;
var _key_resp_allKeys;
var WelcomeMaxDuration;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WelcomeClock.reset();
    routineTimer.reset();
    WelcomeMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Welcome.started', globalClock.getTime());
    WelcomeMaxDuration = null
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(text);
    WelcomeComponents.push(key_resp);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pruebas;
function pruebasLoopBegin(pruebasLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pruebas = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CONDICIONES.csv',
      seed: undefined, name: 'pruebas'
    });
    psychoJS.experiment.addLoop(pruebas); // add the loop to the experiment
    currentLoop = pruebas;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrueba of pruebas) {
      snapshot = pruebas.getSnapshot();
      pruebasLoopScheduler.add(importConditions(snapshot));
      pruebasLoopScheduler.add(NumerosRoutineBegin(snapshot));
      pruebasLoopScheduler.add(NumerosRoutineEachFrame());
      pruebasLoopScheduler.add(NumerosRoutineEnd(snapshot));
      pruebasLoopScheduler.add(pruebasLoopEndIteration(pruebasLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function pruebasLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pruebas);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pruebasLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var NumerosMaxDurationReached;
var _prueba_resp_allKeys;
var NumerosMaxDuration;
var NumerosComponents;
function NumerosRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Numeros' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    NumerosClock.reset();
    routineTimer.reset();
    NumerosMaxDurationReached = false;
    // update component parameters for each repeat
    Prueba.setText(estimulo);
    prueba_resp.keys = undefined;
    prueba_resp.rt = undefined;
    _prueba_resp_allKeys = [];
    psychoJS.experiment.addData('Numeros.started', globalClock.getTime());
    NumerosMaxDuration = null
    // keep track of which components have finished
    NumerosComponents = [];
    NumerosComponents.push(Prueba);
    NumerosComponents.push(prueba_resp);
    
    for (const thisComponent of NumerosComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NumerosRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Numeros' ---
    // get current time
    t = NumerosClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Prueba* updates
    if (t >= 0 && Prueba.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Prueba.tStart = t;  // (not accounting for frame time here)
      Prueba.frameNStart = frameN;  // exact frame index
      
      Prueba.setAutoDraw(true);
    }
    
    
    // if Prueba is active this frame...
    if (Prueba.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *prueba_resp* updates
    if (t >= 0 && prueba_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prueba_resp.tStart = t;  // (not accounting for frame time here)
      prueba_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prueba_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prueba_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prueba_resp.clearEvents(); });
    }
    
    // if prueba_resp is active this frame...
    if (prueba_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prueba_resp.getKeys({
        keyList: typeof ['left','right','space'] === 'string' ? [['left','right','space']] : ['left','right','space'], 
        waitRelease: false
      });
      _prueba_resp_allKeys = _prueba_resp_allKeys.concat(theseKeys);
      if (_prueba_resp_allKeys.length > 0) {
        prueba_resp.keys = _prueba_resp_allKeys.map((key) => key.name);  // storing all keys
        prueba_resp.rt = _prueba_resp_allKeys.map((key) => key.rt);
        prueba_resp.duration = _prueba_resp_allKeys.map((key) => key.duration);
        // was this correct?
        if (prueba_resp.keys == respuesta) {
            prueba_resp.corr = 1;
        } else {
            prueba_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NumerosComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NumerosRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Numeros' ---
    for (const thisComponent of NumerosComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Numeros.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (prueba_resp.keys === undefined) {
      if (['None','none',undefined].includes(respuesta)) {
         prueba_resp.corr = 1;  // correct non-response
      } else {
         prueba_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prueba_resp.corr, level);
    }
    psychoJS.experiment.addData('prueba_resp.keys', prueba_resp.keys);
    psychoJS.experiment.addData('prueba_resp.corr', prueba_resp.corr);
    if (typeof prueba_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prueba_resp.rt', prueba_resp.rt);
        psychoJS.experiment.addData('prueba_resp.duration', prueba_resp.duration);
        routineTimer.reset();
        }
    
    prueba_resp.stop();
    // the Routine "Numeros" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CierreMaxDurationReached;
var _si_allKeys;
var CierreMaxDuration;
var CierreComponents;
function CierreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Cierre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CierreClock.reset();
    routineTimer.reset();
    CierreMaxDurationReached = false;
    // update component parameters for each repeat
    si.keys = undefined;
    si.rt = undefined;
    _si_allKeys = [];
    psychoJS.experiment.addData('Cierre.started', globalClock.getTime());
    CierreMaxDuration = null
    // keep track of which components have finished
    CierreComponents = [];
    CierreComponents.push(despedida);
    CierreComponents.push(si);
    
    for (const thisComponent of CierreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CierreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Cierre' ---
    // get current time
    t = CierreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *despedida* updates
    if (t >= 0 && despedida.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      despedida.tStart = t;  // (not accounting for frame time here)
      despedida.frameNStart = frameN;  // exact frame index
      
      despedida.setAutoDraw(true);
    }
    
    
    // if despedida is active this frame...
    if (despedida.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *si* updates
    if (t >= 0 && si.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      si.tStart = t;  // (not accounting for frame time here)
      si.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { si.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { si.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { si.clearEvents(); });
    }
    
    // if si is active this frame...
    if (si.status === PsychoJS.Status.STARTED) {
      let theseKeys = si.getKeys({
        keyList: typeof ['y','n','left','right','space'] === 'string' ? [['y','n','left','right','space']] : ['y','n','left','right','space'], 
        waitRelease: false
      });
      _si_allKeys = _si_allKeys.concat(theseKeys);
      if (_si_allKeys.length > 0) {
        si.keys = _si_allKeys[_si_allKeys.length - 1].name;  // just the last key pressed
        si.rt = _si_allKeys[_si_allKeys.length - 1].rt;
        si.duration = _si_allKeys[_si_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CierreComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CierreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Cierre' ---
    for (const thisComponent of CierreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Cierre.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(si.corr, level);
    }
    psychoJS.experiment.addData('si.keys', si.keys);
    if (typeof si.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('si.rt', si.rt);
        psychoJS.experiment.addData('si.duration', si.duration);
        routineTimer.reset();
        }
    
    si.stop();
    // the Routine "Cierre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
