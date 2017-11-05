
# ng4-gauge-component  
![Alt text](http://bitbox.click/capture.gif?raw=true "capture")

## Install

*npm install ng4-gauge-component --save*

## Configurations

In .angular-cli.json in scripts section add "../node_modules/ng4-gauge-component/steelseries-min.js" and "../node_modules/ng4-gauge-component/tween.js"
```
"scripts": [
        "../node_modules/ng4-gauge-component/steelseries-min.js",
        "../node_modules/ng4-gauge-component/tween.js"
]
```
## Using:

in your app module add GaugeModule in import section:
```
import { GaugeModule } from 'ng4-gauge-component/gauge/gauge.module';
...
imports: [
...
    GaugeModule
 ],
```
##Template:
```
<app-gauge
  title="Ventas"
  unit="$us"
  [uid]="'uid'"
  min="0"
  max="100"
  pointer_color="red"
  pointer_type="type9"
  threshold="50"
  led_color="green"
  [led_color_visible]="true"
  type="type4"
  [sections]="sections"
  [areas]="areas"
  [value]="55">
</app-gauge>

<app-gauge
  title="Ventas"
  unit="$us"
  [uid]="'uid2'"
  min="0"
  max="100"
  pointer_color="red"
  pointer_type="type9"
  threshold="70"
  led_color="green"
  [led_color_visible]="true"
  type="type4"
  [sections]="sections"
  [areas]="areas"
  [value]="95">
</app-gauge>
```

##Input:
```
  title:string title of gauge
  unit:string Unit of gauge
  [uid]:string unique id of gauge
  min:number min value of gauge
  max:number mas value of gauge
  pointer_color:string 'red'|'green'|'blue'|'orange'|'yellow'|'cyan'|'magenta'|'white'|'gray'|'black'|'raith'
  pointer_type:string 'type1'|'type2'|'type3'|'type4'|'type5'|'type6'|'type7'|'type8'|'type9'|'type10'|'type11'|'type12'|'type13'|'type14'|'type15'|'type16'|
  threshold:number limit value for flashing led
  led_color_visible:boolean show flashing led
  led_color:string 'red'|'green'|'blue'|'orange'|'yellow'|'cyan'|'magenta'
  type:string 'type1'|'type2'|'type3'|'type4'
  [sections]:any array objects
      [{
        start: 0,                     //start of section
        end: 25,                      //end of section
        color: 'rgba(255, 0, 0, 0.5)' //color of section
      }]
  [areas]:any array objects
      [{
         start: 0,                     //start of area
         end: 25,                      //end of area
         color: 'rgba(255, 0, 0, 0.3)' //color of area
      }]
  [value]:number current value
```
License

MIT
