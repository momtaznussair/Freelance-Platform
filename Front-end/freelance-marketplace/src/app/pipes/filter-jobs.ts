import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: 'filterJobs',
  pure: false,
})
@Injectable()
export class filterJobs implements PipeTransform {
  
  transform(jobs: any, category: string | null, paymentType: string | null, experienceLevel: string | null, nOfPoroposals : number | null): any {
      //return the origin jobs if it's empty of not filter is selected
    if (! jobs || (! category && ! paymentType && ! experienceLevel && ! nOfPoroposals))
    {
        return jobs;
    }

    // category filter
    if (category)
    {
        jobs = jobs.filter((job:any) =>
                job.category === category
            );
    }

    // paymentType filter
    if (paymentType)
    {
        jobs = jobs.filter((job:any) =>
                job.payment_style === paymentType
            );
    }

    // experienceLevel filter
    if (experienceLevel)
    {
        jobs = jobs.filter((job:any) =>
                job.experience === experienceLevel
            );
    }

    // number of proposals filter
    if (nOfPoroposals)
    {
        jobs = jobs.filter((job:any) =>
                job.proposals_number === nOfPoroposals
            );
    }

    return jobs;

  }

}