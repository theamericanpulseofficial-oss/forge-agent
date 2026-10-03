const OK=['integrate.api.nvidia.com','api.openai.com','api.anthropic.com','api.deepseek.com','api.x.ai','api.mistral.ai','api.groq.com','api.cerebras.ai','api.together.xyz','openrouter.ai','generativelanguage.googleapis.com'];
export default async function handler(req){
  const h={'access-control-allow-origin':'*','access-control-allow-headers':'*','access-control-allow-methods':'*'};
  if(req.method==='OPTIONS')return new Response(null,{status:204,headers:h});
  let u;try{u=new URL(req.headers.get('x-target'))}catch(e){return new Response('bad target',{status:400,headers:h})}
  if(!OK.includes(u.hostname))return new Response('host not allowed',{status:403,headers:h});
  const fh=new Headers();for(const k of ['authorization','content-type','x-api-key','anthropic-version'])if(req.headers.get(k))fh.set(k,req.headers.get(k));
  const up=await fetch(u.toString(),{method:req.method,headers:fh,body:req.method==='GET'?undefined:await req.text()});
  const rh=new Headers(h);rh.set('content-type',up.headers.get('content-type')||'application/json');
  return new Response(up.body,{status:up.status,headers:rh});
}
export const config={runtime:'edge'};
