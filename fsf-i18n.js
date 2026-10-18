// FSFINDS · EN → PT-BR translator. Translates rendered text, placeholders and titles in place.
(function(){
const D={
'Spreadsheet':'Planilha','Search':'Buscar','Register':'Cadastrar','Register ↗':'Cadastrar','Find':'Buscar','Browse finds':'Ver finds',
'Home':'Início','Shop':'Loja','Sellers':'Vendedores','Tools':'Ferramentas','Account':'Conta','Saved':'Salvos',
'Shop by category':'Compre por categoria','Browse the verified collections':'Navegue pelas coleções verificadas',
'Partner sellers':'Vendedores parceiros',"Stores I've ordered from and work with directly":'Lojas onde já comprei e com quem trabalho diretamente',
'All sellers →':'Todos os vendedores →','Latest finds':'Últimos finds','Fresh from the partner sellers':'Novidades dos vendedores parceiros',
'View all finds →':'Ver todos os finds →','Free haul tools':'Ferramentas grátis','Check, size and track before and after you buy':'Confira, escolha o tamanho e rastreie antes e depois de comprar',
'How it works':'Como funciona','Your first haul in three steps':'Sua primeira compra em três passos','Questions':'Perguntas frequentes',
'Verified finds':'Finds verificados','QC photos':'Fotos de QC',
'Verified finds from my partner sellers, with QC photos and full details. Order everything through':'Finds verificados dos meus vendedores parceiros, com fotos de QC e todos os detalhes. Compre tudo pela',
'Register on':'Cadastre-se na','results':'resultados','finds':'finds','Ships':'Envia em','Open store on':'Abrir loja na','Buy on':'Comprar na','More from':'Mais de',
'Featured':'Destaques','Price: low to high':'Preço: menor para maior','Price: high to low':'Preço: maior para menor','Most QC photos':'Mais fotos de QC',
'All sellers':'Todos os vendedores','All finds':'Todos os finds','All':'Todos','Nothing matches.':'Nada encontrado.','Clear filters':'Limpar filtros',
'Every store here is one I\'ve ordered from and work with directly.':'Todas as lojas aqui são lojas onde já comprei e com quem trabalho diretamente.',
'← All sellers':'← Todos os vendedores','← Back':'← Voltar',
'Shoes':'Tênis','Tops':'Camisetas','Hoodies':'Moletons','Pants':'Calças','Outerwear':'Jaquetas','Accessories':'Acessórios',
'Find my size':'Descobrir meu tamanho','Copy link':'Copiar link','✓ Copied':'✓ Copiado','♡ Save':'♡ Salvar','♥ Saved':'♥ Salvo','♡ Save seller':'♡ Salvar vendedor',
'Seller':'Vendedor','Platform':'Plataforma','Item ID':'ID do item','Est. weight':'Peso estimado','Rating':'Avaliação','Finds':'Finds','Ships in':'Envio em','Partner since':'Parceiro desde',
'Main':'Principal','product photo':'foto do produto',
'Haul tools':'Ferramentas','Free, no account needed':'Grátis, sem precisar de conta',
'Tracker':'Rastreio','QC finder':'QC finder','Size':'Tamanho','Converter':'Conversor',
'Package tracker':'Rastreador de encomendas','Live tracking for 3,000+ carriers. The carrier is detected from your number.':'Rastreio ao vivo em mais de 3.000 transportadoras. A transportadora é detectada pelo seu código.',
'Live tracking for 3,000+ carriers with carrier detection.':'Rastreio ao vivo em mais de 3.000 transportadoras, com detecção automática.',
'Track a parcel':'Rastrear encomenda','Track':'Rastrear','Tracking number':'Código de rastreio',
'Enter a tracking number with at least 8 letters or digits.':'Digite um código de rastreio com pelo menos 8 letras ou números.',
'Open on 17TRACK ↗':'Abrir no 17TRACK ↗','Recent':'Recentes','Clear':'Limpar','Copy number':'Copiar código','Detected ·':'Detectado ·','site ↗':'site ↗',
'Auto-detect on 17TRACK':'Detecção automática no 17TRACK',
'QC photo finder':'Buscador de fotos de QC','Paste a Weidian, Taobao, 1688 or agent link. Catalog items show our QC photos, and every link gets quick community QC searches.':'Cole um link da Weidian, Taobao, 1688 ou de um agente. Itens do catálogo mostram nossas fotos de QC e todo link ganha buscas rápidas na comunidade.',
'See our QC photos and search community QC for any link.':'Veja nossas fotos de QC e busque QC da comunidade para qualquer link.',
'Find QC':'Buscar QC','Paste an item link':'Cole o link do item',"Couldn't read an item ID from that link.":'Não foi possível ler o ID do item nesse link.',
'Product page':'Página do produto','No QC photos for this item yet':'Ainda não há fotos de QC deste item','Search elsewhere':'Buscar em outros lugares',
'Order it on':'Compre na','to get your own warehouse photos, or check the community links below.':'para receber suas próprias fotos do armazém, ou veja os links da comunidade abaixo.',
'QC photos found':'Fotos de QC encontradas','No QC yet':'Sem QC ainda','Warehouse QC appears after you order.':'O QC do armazém aparece depois do pedido.','Seller photos and options.':'Fotos e opções do vendedor.',
'Reddit QC posts':'Posts de QC no Reddit','Community QC threads for this item ID.':'Tópicos de QC da comunidade para este ID.','Google images':'Google Imagens',"Other buyers' photos of this item ID.":'Fotos de outros compradores deste ID.',
'Not in our catalog yet':'Ainda não está no catálogo',
'Size estimator':'Calculadora de tamanho','Height and weight in, how each size fits you out.':'Informe altura e peso e veja como cada tamanho fica em você.',
'Height':'Altura','Weight':'Peso','Body':'Corpo','Men':'Masculino','Women':'Feminino','Build':'Biotipo','Slim':'Magro','Regular':'Normal','Athletic':'Atlético','Broad':'Largo',
'Garment':'Peça','Tee':'Camiseta','Hoodie':'Moletom','Jacket':'Jaqueta','Preferred fit':'Caimento preferido','Fitted':'Justo','Oversized':'Oversized','Baggy':'Largo',
'Tight':'Apertado','Relaxed':'Folgado','Your size':'Seu tamanho','Selected size':'Tamanho selecionado','Chest':'Peito','Length':'Comprimento','On you':'Em você','Waist':'Cintura',
'Between sizes: size down for a closer fit, up for a looser one.':'Entre dois tamanhos: escolha o menor para ficar mais justo e o maior para ficar mais folgado.',
'Know your chest? Measure around the fullest part (optional).':'Sabe a medida do peito? Meça na parte mais larga (opcional).',
'Know your waist? Measure where your pants usually sit (optional).':'Sabe a medida da cintura? Meça onde a calça costuma ficar (opcional).',
'Tees, hoodies and jackets. Tap any row to compare sizes.':'Camisetas, moletons e jaquetas. Toque em uma linha para comparar tamanhos.',
'Jeans, trousers and cargos. Length is compared with your height.':'Jeans, calças sociais e cargo. O comprimento é comparado com sua altura.',
'Long on you, expect some stacking.':'Fica comprida em você, vai sobrar um pouco na barra.','Might sit cropped above the ankle.':'Pode ficar acima do tornozelo.','Length looks right for your height.':'O comprimento parece certo para sua altura.',
'Foot length (heel to longest toe)':'Comprimento do pé (calcanhar ao dedo maior)','Or start from your usual size':'Ou comece pelo seu tamanho de sempre','Pick EU size…':'Escolha o tamanho EU…',
'Your size · EU':'Seu tamanho · EU','Selected · EU':'Selecionado · EU','Snug':'Justo','Ideal':'Ideal','Loose':'Folgado','Insole · room':'Palmilha · folga',
'Brand fit':'Forma da marca','Runs small':'Veste pequeno','True to size':'Tamanho normal','Runs large':'Veste grande','Foot width':'Largura do pé','Narrow':'Estreito','Wide':'Largo',
'Measure your foot standing on paper, heel against the wall.':'Meça o pé em pé sobre um papel, com o calcanhar encostado na parede.',
'Bottoms':'Calças','Use the seller\'s chart':'Usar a tabela do vendedor','Copy the chest (胸围) numbers from the listing for an exact fit.':'Copie as medidas de peito (胸围) do anúncio para um ajuste exato.',
'Reset to typical':'Voltar ao padrão','Chart reset':'Tabela redefinida',
'Link converter':'Conversor de links','Convert':'Converter','Paste marketplace or agent links, one per line, and get clean':'Cole links de lojas ou agentes, um por linha, e receba links limpos da',
'links with other referral codes removed.':'sem códigos de indicação de terceiros.','Copy all':'Copiar todos','Copy':'Copiar','Open ↗':'Abrir ↗',"Couldn't read an item ID from":'Não foi possível ler o ID do item em',
'Sign in':'Entrar','Create account':'Criar conta','Sign out':'Sair','Forgot password?':'Esqueceu a senha?','Welcome back':'Bem-vindo de volta',
'Sign in to see your saved finds and sellers':'Entre para ver seus finds e vendedores salvos','Create your account':'Crie sua conta','Save finds and sellers on every device':'Salve finds e vendedores em todos os seus aparelhos',
'Already have an account? Sign in':'Já tem conta? Entrar','Reset password':'Redefinir senha','We will email you a reset link':'Vamos enviar um link de redefinição por email','Send reset link':'Enviar link','Back to sign in':'Voltar para entrar',
'Email':'Email','Password (min. 6 characters)':'Senha (mín. 6 caracteres)','Please wait…':'Aguarde…',
'Your FSFINDS account':'Sua conta FSFINDS','You are browsing as a guest. Saved items stay on this device until you sign in.':'Você está navegando como visitante. Os itens salvos ficam neste aparelho até você entrar.',
'Saved finds':'Finds salvos','Saved sellers':'Vendedores salvos','Tracked parcels':'Encomendas rastreadas','Tap the heart on any find to save it here.':'Toque no coração de qualquer find para salvá-lo aqui.',
'Save your favourite stores from the Sellers page.':'Salve suas lojas favoritas na página de Vendedores.','See sellers':'Ver vendedores',
'Accounts are not connected yet. The site owner needs to add the Supabase keys.':'As contas ainda não estão conectadas. O dono do site precisa adicionar as chaves do Supabase.',
'Enter a valid email.':'Digite um email válido.','Password needs at least 6 characters.':'A senha precisa ter pelo menos 6 caracteres.',
'Check your inbox to confirm your email, then sign in.':'Confira sua caixa de entrada para confirmar o email e depois entre.','If that email has an account, a reset link is on its way.':'Se esse email tiver conta, o link de redefinição está a caminho.',
'Coupons':'Cupons','Admin':'Admin','Search finds and sellers…':'Buscar finds e vendedores…','See all results in Shop →':'Ver todos os resultados na Loja →','Popular finds':'Finds populares',
'Coupons for your first haul':'Cupons para sua primeira compra','Your code':'Seu código','Claim my coupons ↗':'Resgatar meus cupons ↗','Create your free':'Crie sua conta grátis na',
'account through FSFINDS and the new-account coupons are added for when your parcel ships.':'pela FSFINDS e os cupons de nova conta são adicionados para quando sua encomenda for enviada.','I already have':'Já tenho conta na',
'© 2026 FSFINDS, curated by Flaviano Santana. FSFINDS is an informational platform and does not sell products. Purchases, payments, shipping and fulfillment are handled by':'© 2026 FSFINDS, curadoria de Flaviano Santana. A FSFINDS é uma plataforma informativa e não vende produtos. Compras, pagamentos, envio e entrega são feitos pela',
'and the third-party sellers.':'e pelos vendedores terceiros.','may pay a commission when you sign up or buy through these links; your price stays the same.':'pode pagar uma comissão quando você se cadastra ou compra por esses links; o seu preço continua o mesmo.',
'Order from a partner seller':'Compre de um vendedor parceiro','Ship it in one parcel':'Envie tudo em uma só encomenda',
'Combine your items, choose a shipping line, apply your coupons, then track the parcel here, door to door.':'Junte seus itens, escolha a linha de envio, aplique os cupons e rastreie a encomenda aqui, de porta a porta.',
'How are the partner sellers chosen?':'Como os vendedores parceiros são escolhidos?','Each seller listed here has been ordered from directly, with consistent QC results and reliable restocks.':'Já comprei diretamente de cada vendedor listado, com QC consistente e reposição confiável.',
'What does the coupon code do?':'O que o código de cupom faz?','Do I pay FSFINDS anything?':'Eu pago algo para a FSFINDS?',
'Saved to your list':'Salvo na sua lista','Removed from saved':'Removido dos salvos','Seller saved':'Vendedor salvo','Seller removed':'Vendedor removido','Code copied':'Código copiado','Link copied':'Link copiado','Copied':'Copiado','Signed out':'Você saiu','Account created':'Conta criada','Tracking number copied':'Código de rastreio copiado',
'Esc':'Esc','Got QC for this item?':'Tem QC deste item?','Share your warehouse photos or videos. They go live after review.':'Compartilhe suas fotos ou vídeos do armazém. Eles entram no ar depois da revisão.','Sign in to share':'Entre para compartilhar','Upload photos':'Enviar fotos','▶ Video':'▶ Vídeo','Search by name or seller':'Buscar por nome ou vendedor','Save seller':'Salvar vendedor','Remove':'Remover','Edit':'Editar'
};
const R=[
[/^(\d+\+?) verified finds listed$/,'$1 finds verificados'],[/^Search (\d+) finds and (\d+) sellers…$/,'Buscar $1 finds e $2 vendedores…'],
[/^(\d+) items$/,'$1 itens'],[/^Ships (.+)$/,'Envia em $1'],[/^Make a free (.+) account$/,'Crie uma conta grátis na $1'],[/^Is (.+) safe to use\?$/,'A $1 é segura?'],
[/^Open on (.+)$/,'Abrir na $1'],[/^Original (.+) listing$/,'Anúncio original na $1'],[/^QC set (\d+)$/,'Lote de QC $1'],[/^QC photo (\d+)$/,'Foto de QC $1'],[/^QC (\d+)$/,'QC $1'],
[/^QC photo (\d+) of (\d+)$/,'Foto de QC $1 de $2'],[/^Member since (.+)$/,'Membro desde $1'],[/^(\d+) photos?$/,'$1 fotos'],[/^(\d+) sets?$/,'$1 lotes'],
[/^In our catalog · (\d+) QC photos$/,'No catálogo · $1 fotos de QC'],[/^Best match for a (\w+) fit\.$/,'Melhor opção para o caimento escolhido.'],
[/^(?:Your|Est\.) chest (.+) · (.+) room$/,'Peito $1 · $2 de folga'],[/^(?:Your|Est\.) waist (.+) · (.+) room$/,'Cintura $1 · $2 de folga'],
[/^(\S+) is the closest match for a (\w+) fit\.$/,'$1 é o mais indicado para o caimento escolhido.'],[/^Foot (.+) · (.+) mm toe room(?: · EU (.+) is the closest match)?$/,(m,a,b,c)=>`Pé ${a} · ${b} mm de folga${c?' · EU '+c+' é o mais indicado':''}`],
[/^Turn any marketplace or agent link into a clean (.+) link\.$/,'Transforme qualquer link de loja ou agente em um link limpo da $1.'],
[/^Open any find and order it on (.+)\. They buy it from the seller and photograph it at the warehouse so you see QC before it ships\.$/,'Abra qualquer find e compre na $1. Eles compram do vendedor e fotografam no armazém, então você vê o QC antes do envio.'],
[/^(.+) is the shopping agent every find here ships through\. Sign up with code (.+) to get the new-account coupons\.$/,'A $1 é o agente de compras usado em todos os finds daqui. Cadastre-se com o código $2 para ganhar os cupons de nova conta.'],
[/^(.+) is a shopping agent: it buys from Chinese marketplaces for you, checks each item at its warehouse and sends QC photos before you pay for international shipping\.$/,'A $1 é um agente de compras: compra nas lojas chinesas por você, confere cada item no armazém e envia fotos de QC antes de você pagar o frete internacional.'],
[/^Signing up with code (.+) adds (.+)'s new-account coupons to your account, used on your shipping bill\.$/,'Ao se cadastrar com o código $1, os cupons de nova conta da $2 são adicionados à sua conta para usar no frete.'],
[/^No\. The site is free\. (.+) may pay a commission when you sign up or buy through these links, and your price stays the same\.$/,'Não. O site é grátis. A $1 pode pagar uma comissão quando você se cadastra ou compra por esses links, e o seu preço continua o mesmo.'],
[/^(.+) link copied$/,'Link da $1 copiado'],[/^(\d+) links? converted$/,'$1 link(s) convertido(s)'],[/^(\d+) links copied$/,'$1 links copiados'],
[/^(.+) link · code (.+)$/,'Link da $1 · código $2'],[/^Original (.+) link$/,'Link original da $1'],[/^Price on (.+)$/,'Preço na $1'],
[/^Tight · (.+)$/,'Apertado · $1'],[/^Regular · (.+)$/,'Normal · $1'],[/^Relaxed · (.+)$/,'Folgado · $1'],[/^Oversized · (.+)$/,'Oversized · $1'],[/^Baggy · (.+)$/,'Largo · $1'],
[/^(\d+) items · (.+)$/,'$1 itens · $2'],[/^(.+) finds$/,'$1 finds'],[/^No matches for “$/,'Nada encontrado para “']
];
function tr(s){const t=s.trim();if(!t)return null;let o=Object.prototype.hasOwnProperty.call(D,t)?D[t]:null;
  if(o==null){for(const [re,rep] of R){if(re.test(t)){o=t.replace(re,rep);break;}}}
  if(o==null)return null;return s.match(/^\s*/)[0]+o+s.match(/\s*$/)[0];}
const SKIP=/^(SCRIPT|STYLE|TEXTAREA|CODE)$/;
function doNode(n){
  if(n.nodeType===3){const p=n.parentNode;if(!p||SKIP.test(p.nodeName)||n.__fsOut===n.data)return;const out=tr(n.data);if(out!=null&&out!==n.data){n.__fsIn=n.data;n.__fsOut=out;n.data=out;}return;}
  if(n.nodeType!==1||SKIP.test(n.nodeName))return;
  for(const a of ['placeholder','title','aria-label']){const v=n.getAttribute(a);if(v&&n['__fso_'+a]!==v){const o=tr(v);if(o!=null&&o!==v){n['__fsi_'+a]=v;n['__fso_'+a]=o;n.setAttribute(a,o);}}}
  for(const c of n.childNodes)doNode(c);}
function restore(n){if(n.nodeType===3){if(n.__fsOut===n.data&&n.__fsIn!=null){n.data=n.__fsIn;}n.__fsOut=null;return;}
  if(n.nodeType!==1)return;for(const a of ['placeholder','title','aria-label']){if(n['__fso_'+a]&&n.getAttribute(a)===n['__fso_'+a])n.setAttribute(a,n['__fsi_'+a]);n['__fso_'+a]=null;}
  for(const c of n.childNodes)restore(c);}
let obs=null,lang='en';
function set(l){lang=l==='pt'?'pt':'en';try{localStorage.setItem('fsf_lang',lang);}catch(e){}document.documentElement.lang=lang==='pt'?'pt-BR':'en';
  if(lang==='pt'){doNode(document.body);if(!obs){obs=new MutationObserver(ms=>{for(const m of ms){if(m.type==='childList')m.addedNodes.forEach(doNode);else doNode(m.target);}});
    obs.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','title','aria-label']});}}
  else{if(obs){obs.disconnect();obs=null;}restore(document.body);}}
function initial(){try{const s=localStorage.getItem('fsf_lang');if(s)return s;}catch(e){}return 'en';}
window.FSFI18N={set,get:()=>lang,initial,t:s=>{const o=tr(s);return o==null?s:o;}};
})();
