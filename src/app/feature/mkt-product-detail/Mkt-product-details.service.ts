import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MktProductDetailsService {
  public redirectToReviews: Subject<void> = new Subject<void>();
}
