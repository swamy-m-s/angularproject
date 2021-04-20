import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'courses',component:CoursesComponent},
  {path:'education',component:EducationComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
