const createElement =  (tag, {attrs={}, children= []} = {attrs:{}, children:[]})=>{
    if(typeof tag === 'string'){
        let $el = document.createElement(tag);
        Object.entries(attrs).forEach(([k,v])=>{
            $el.setAttribute(k,v);
        });
        if(Array.isArray(children)){
            for (const child in children){
                if(typeof child === 'string'){
                    const $text = document.createTextNode(child);
                    $el.appendChild($text);
                }else{
                    $el.appendChild(child);
                }
            }
        }else{
            if(typeof children === 'string'){
                const $text = document.createTextNode(children);
                $el.appendChild($text);
            }else{
                console.log(children);
                $el.appendChild(children);
            }
        }

        return $el;
    }
    else{
        return tag({attrs, children});
    }
};

export default createElement;
