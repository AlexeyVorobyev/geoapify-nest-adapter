import { HttpService } from '@nestjs/axios'
import { catchError, firstValueFrom } from 'rxjs'
import { AxiosError } from 'axios'
import { Builder } from 'builder-pattern'
import { UniversalError } from '@src/shared-modules/common/class/universal-error'
import { EUniversalExceptionType } from '@src/shared-modules/common/enum/exceptions'
import { Injectable } from '@nestjs/common'

@Injectable()
export class GeoapifyFetchService {
    constructor(
        private httpService: HttpService,
    ) {
    }

    async fetch(query:string) {
        return await firstValueFrom(
            this.httpService.get(query).pipe(
                catchError((error: AxiosError) => {
                    Builder(UniversalError)
                        .exceptionBaseClass(EUniversalExceptionType.badRequest)
                        .messages([
                            'Not correct request to geoapify',
                            error.message
                        ])
                        .build().throw()
                    throw 'An error happened!';
                }),
            ),
        )
    }
}