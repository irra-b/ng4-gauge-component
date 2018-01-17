import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
declare var steelseries: any;
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit, AfterViewInit, OnChanges {
  radial: any;
  @Input('title') title: string='title';
  @Input('unit') unit: string='Unit';
  @Input('uid') uid: string;
  @Input('value') _value: number=0;
  @Input('type') type: string='type1';
  @Input('min') min: number=0;
  @Input('max') max: number=100;
  @Input('size') size: number=200;
  @Input('pointer_type') pointer_type: string='type1';
  @Input('pointer_color') pointer_color: string='red';
  @Input('threshold') threshold:number=50;
  @Input('led_color') led_color:string='red';
  @Input('led_color_visible') led_color_visible:boolean=true;
  @Input('sections') sections:any=[];
  @Input('areas') areas:any=[];
  gauge_types:any=[
    {type:'type1',val:steelseries.GaugeType.TYPE1},
    {type:'type2',val:steelseries.GaugeType.TYPE2},
    {type:'type3',val:steelseries.GaugeType.TYPE3},
    {type:'type4',val:steelseries.GaugeType.TYPE4}

  ];
  pointer_types:any=[
    {type:'type1',val:steelseries.PointerType.TYPE1},
    {type:'type2',val:steelseries.PointerType.TYPE2},
    {type:'type3',val:steelseries.PointerType.TYPE3},
    {type:'type4',val:steelseries.PointerType.TYPE4},
    {type:'type5',val:steelseries.PointerType.TYPE5},
    {type:'type6',val:steelseries.PointerType.TYPE6},
    {type:'type7',val:steelseries.PointerType.TYPE7},
    {type:'type8',val:steelseries.PointerType.TYPE8},
    {type:'type9',val:steelseries.PointerType.TYPE9},
    {type:'type10',val:steelseries.PointerType.TYPE10},
    {type:'type11',val:steelseries.PointerType.TYPE11},
    {type:'type12',val:steelseries.PointerType.TYPE12},
    {type:'type13',val:steelseries.PointerType.TYPE13},
    {type:'type14',val:steelseries.PointerType.TYPE14},
    {type:'type15',val:steelseries.PointerType.TYPE15},
    {type:'type16',val:steelseries.PointerType.TYPE16},
  ];
  pointer_colors:any=[
    {color:'red',val:steelseries.ColorDef.RED},
    {color:'green',val:steelseries.ColorDef.GREEN},
    {color:'blue',val:steelseries.ColorDef.BLUE},
    {color:'orange',val:steelseries.ColorDef.ORANGE},
    {color:'yallow',val:steelseries.ColorDef.YELLOW},
    {color:'cyan',val:steelseries.ColorDef.CYAN},
    {color:'magenta',val:steelseries.ColorDef.MAGENTA},
    {color:'white',val:steelseries.ColorDef.WHITE},
    {color:'gray',val:steelseries.ColorDef.GRAY},
    {color:'black',val:steelseries.ColorDef.BLACK},
    {color:'raith',val:steelseries.ColorDef.RAITH}


  ];
  led_colors:any=[
    {color:'red',val:steelseries.LedColor.RED_LED},
    {color:'green',val:steelseries.LedColor.GREEN_LED},
    {color:'blue',val:steelseries.LedColor.BLUE_LED},
    {color:'orange',val:steelseries.LedColor.ORANGE_LED},
    {color:'yallow',val:steelseries.LedColor.YELLOW_LED},
    {color:'cyan',val:steelseries.LedColor.CYAN_LED},
    {color:'magenta',val:steelseries.LedColor.MAGENTA_LED}
  ];
  constructor() {

  }
  ngOnInit() {

  }
  ngOnChanges(c) {
    console.log(c._value.currentValue);
    this.value(c._value.currentValue);
  }
  ngAfterViewInit(): void {
    var type=this.gauge_types.find((c)=>{
      return (this.type==c.type);

    });
    var pointer_type=this.pointer_types.find((c)=>{
      return (this.pointer_type==c.type);

    });
    var pointer_color=this.pointer_colors.find((c)=>{
      return (this.pointer_color==c.color);

    });
    var led_color=this.led_colors.find((c)=>{
      return (this.led_color==c.color);

    });
    var sections=[];
    this.sections.forEach((v)=>{
      sections.push(steelseries.Section(v.start,v.end,v.color));
    });
    var areas=[];
    this.areas.forEach((v)=>{
      areas.push(steelseries.Section(v.start,v.end,v.color));
    });
    this.radial = new steelseries.Radial(
        this.uid, {
        gaugeType: type.val,
        section: sections,
        area: areas,
        size: this.size,
        titleString: this.title,
        unitString: this.unit,
        maxValue:Number(this.max),
        minValue:Number(this.min),
        pointerType: pointer_type,
        threshold:this.threshold,
        ledVisible:this.led_color_visible,
        ledColor:led_color.val,
        pointerColor: pointer_color.val,
        frameDesign: steelseries.FrameDesign.BLACK_METAL,
        backgroundColor: steelseries.BackgroundColor.CARBON
      });
    this.value(this._value);
  }
  value(v) {
    console.log(this._value);
    try{
      this.radial.setValueAnimated(v);
    }catch(e){}

  }

}
