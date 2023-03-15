import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { BlogPage } from '../blog/blog';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = BlogPage;
  tab3Root = MapPage;
  tab4Root = AboutPage;
  constructor() {}
}
