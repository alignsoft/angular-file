import { Component, NgModule } from '@angular/core';
import { inject, ComponentFixture, TestBed, async } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
import { ngfModule } from './ngf.module';

@Component({
  selector: 'container',
  template: '<input type="file" [(ngfSelect)]="ngf" />'
})
export class ContainerComponent {}

@NgModule({
  imports: [ ngfModule ],
  declarations: [ ContainerComponent ]
}) export class AppModule {}

describe('ngfSelect', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let component
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });

    TestBed.compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(ContainerComponent);
      fixture.detectChanges();
      component = fixture.componentInstance
    })
  }));

  it('inits', ()=>{
    expect(fixture).not.toBeNull();
    expect(component).not.toBeNull();
  })

  it('uploader', ()=>{
    expect(component.ngf.uploader).not.toBeNull();
    expect(component.ngf.selectable).toBe( true );
  })

  it('#getFormData', ()=>{
    expect(component.ngf.uploader.getFormData.constructor).toEqual( Function );
    expect(component.ngf.uploader.getFormData().constructor).toEqual( FormData );
  })
});