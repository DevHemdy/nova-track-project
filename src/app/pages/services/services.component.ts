import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {


  advanceTool: any = [
    {
      id: 1,
      icon: "assets/icons/12.png",
      title: "Advanced Driver Validation System",
      text: "Ensures vehicle security through biometric verification, including fingerprints and facial recognition, allowing only authorized personnel to operate fleet vehicles."
    },
        {
      id: 1,
      icon: "assets/icons/13.png",
      title: "AI-Powered Camera Monitoring",
      text: "Enhances safety by providing real-time alerts on driver fatigue, distractions, lane departures, and collision risks, supported by video evidence for training."
    },
        {
      id: 1,
      icon: "assets/icons/14.png",
      title: "Intelligent Immobilization",
      text: "Remotely disables stationary vehicles during security concerns, effectively preventing theft and unauthorized use without creating road hazards."
    },
        {
      id: 1,
      icon: "assets/icons/15.png",
      title: "Battery Drain Protection",
      text: "Prevents unexpected breakdowns by alerting fleet managers of low vehicle battery levels and internal tracking device power depletion."
    },
        {
      id: 1,
      icon: "assets/icons/16.png",
      title: "Smart Maintenance Prediction",
      text: "Predicts vehicle maintenance needs based on real-time performance data, enabling proactive scheduling and reducing downtime through early issue detection."
    },
        {
      id: 1,
      icon: "assets/icons/17.png",
      title: "Customizable Mobile Experience",
      text: "Offers mobile fleet management with real-time tracking, alerts, digital proof of delivery, and driver verification capabilities accessible from anywhere."
    },
        {
      id: 1,
      icon: "assets/icons/18.png",
      title: "Automated Report Generator",
      text: "Delivers scheduled, customized fleet performance reports directly to stakeholders’ inboxes, enhancing decision-making through timely data.."
    },
        {
      id: 1,
      icon: "assets/icons/19.png",
      title: "Interactive Mapping Options",
      text: "Provides diverse map views including satellite, road, hybrid imagery, and historical playback to improve fleet visibility, route analysis, and operational efficiency."
    },
        {
      id: 1,
      icon: "assets/icons/20.png",
      title: "Enterprise-Grade Security",
      text: "Protects fleet data with multi-layered security measures, including end-to-end encryption, role-based access, audit trails, and regular security assessments."
    },
        {
      id: 1,
      icon: "assets/icons/21.png",
      title: "Unlimited Geofencing",
      text: "Allows creation of unlimited, custom virtual boundaries with detailed entry-exit logging and tailored alert configurations to enhance location-specific operational monitoring."
    },
        {
      id: 1,
      icon: "assets/icons/22.png",
      title: "Comprehensive Reporting Suite",
      text: "Generates tailored reports on fleet activity, geofencing, idle time, mileage, speeding, and efficiency metrics to optimize fleet management and compliance."
    },
        {
      id: 1,
      icon: "assets/icons/23.png",
      title: "Reporting System",
      text: "Automates fleet intelligence delivery with customizable schedules and formats, ensuring alignment with business objectives and operational reviews."
    },
    

  ]

}
