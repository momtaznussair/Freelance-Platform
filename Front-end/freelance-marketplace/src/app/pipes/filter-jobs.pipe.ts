import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: 'filterJobs',
  pure: false,
})
@Injectable()
export class filterJobs implements PipeTransform {
  
  transform(jobs: any, category: any []|null , paymentStyle: any [] |null, experienceLevel:any []|null , nOfPoroposals : {min:number,max:number} |null): any {
      //return the origin jobs if it's empty of not filter is selected
    if (! jobs || (! category && ! paymentStyle && ! experienceLevel && ! nOfPoroposals))
    {
        return jobs;
    }

    // category filter
    if (category)
    {
      let cats:any=[];
      category.forEach((cat)=>{
         if(cat.selected){
           cats.push(cat.name);
         }
      })
       jobs = jobs.filter((job:any) =>{
         for(let i=0; i< cats.length;i++){
          if(cats[i]== job.category)    return job;
         }
           
               })
      
    }

    // paymentType filter
    if (paymentStyle)
    {
       let Styles:any=[];
       paymentStyle.forEach((Style)=>{
          if(Style.selected){
            Styles.push(Style.name);
          }
       })
      //  console.log(Styles)
        jobs = jobs.filter((job:any) =>{
           if(Styles[0]== job.payment_style)    return job;
           if(Styles[1]== job.payment_style)    return job; 
            
                })
           
    }

    // experienceLevel filter
    if (experienceLevel)
    {
      let levels:any=[];
       experienceLevel.forEach((level)=>{
          if(level.selected){
            levels.push(level.name);
          }
       })
        jobs = jobs.filter((job:any) =>{
               if (levels[0]== job.experience)    return job;
           else if(levels[1]== job.experience)    return job;
           else if(levels[2]== job.experience)    return job;  
          //  else return job;
                })
        
              
    }

    // number of proposals filter
    if (nOfPoroposals)
    {
        jobs = jobs.filter((job:any) =>{
          if(( job.proposals_number< nOfPoroposals.max)&&( job.proposals_number> nOfPoroposals.min)) { return job;}
               
         } )
    }

    return jobs;

  }

}