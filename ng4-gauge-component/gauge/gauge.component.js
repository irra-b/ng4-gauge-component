"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GaugeComponent = /** @class */ (function () {
    function GaugeComponent() {
        this.sections = Array(steelseries.Section(0, 25, 'rgba(255, 0, 0, 0.3)'), steelseries.Section(25, 50, 'rgba(255, 220, 0, 0.3)'), steelseries.Section(50, 100, 'rgba(0, 220, 0, 0.3)'));
        this.areas = Array(steelseries.Section(75, 100, 'rgba(0, 255, 0, 0.3)'));
    }
    GaugeComponent.prototype.ngOnInit = function () {
    };
    GaugeComponent.prototype.ngOnChanges = function (c) {
        console.log(c._value.currentValue);
        this.value(c._value.currentValue);
    };
    GaugeComponent.prototype.ngAfterViewInit = function () {
        this.radial = new steelseries.Radial(this.uid, {
            section: this.sections,
            area: this.areas,
            titleString: this.title,
            unitString: this.unit,
            pointerType: steelseries.PointerType.TYPE8,
            frameDesign: steelseries.FrameDesign.BLACK_METAL,
            backgroundColor: steelseries.BackgroundColor.CARBON
        });
        this.value(this._value);
    };
    GaugeComponent.prototype.value = function (v) {
        console.log(this._value);
        try {
            this.radial.setValueAnimated(v);
        }
        catch (e) { }
    };
    __decorate([
        core_1.Input('title')
    ], GaugeComponent.prototype, "title");
    __decorate([
        core_1.Input('unit')
    ], GaugeComponent.prototype, "unit");
    __decorate([
        core_1.Input('uid')
    ], GaugeComponent.prototype, "uid");
    __decorate([
        core_1.Input('value')
    ], GaugeComponent.prototype, "_value");
    GaugeComponent = __decorate([
        core_1.Component({
            selector: 'app-gauge',
            templateUrl: './gauge.component.html',
            styleUrls: ['./gauge.component.css']
        })
    ], GaugeComponent);
    return GaugeComponent;
}());
exports.GaugeComponent = GaugeComponent;
