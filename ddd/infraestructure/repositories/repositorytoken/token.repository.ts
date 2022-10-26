import { http } from '../../http/http'
import { Token } from '../../../domain/models/token/token'
import { TokenDTO } from '../../http/modelsdto/token/token'

export const ToekenRepository = {
  postToken: async (payloadtoken:any,urlToken:any) => {
    const tpkesn:Token={userName:'',jwtToken:''}
    console.log(urlToken)
    const token = await http.post<Token>(`${urlToken}/Login/login`,JSON.stringify(payloadtoken),tpkesn)
   
    return token;
  }
}