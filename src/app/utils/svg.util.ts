import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('myHomeIcon', ds.bypassSecurityTrustResourceUrl('assets/Home Page.svg'));
}