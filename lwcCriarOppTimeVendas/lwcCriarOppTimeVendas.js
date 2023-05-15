import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import banner1 from '@salesforce/resourceUrl/LogoMeuCarrinhoLWC';//importar a imagem do meu carrinho no sistema

export default class lwcCriarOppTimeVendas extends LightningElement {
//função que vai de fato inserir os campos para criar a oportunidade  
    handleSubmit( event ) {

        event.preventDefault();        
        let fields = event.detail.fields;
        console.log( 'Fields are ' + JSON.stringify( fields ) );
        this.template.querySelector( 'lightning-record-edit-form' ).submit( fields );

    }
//Criar uma função para limpar os campos.
    handleReset( event ) {

        const inputFields = this.template.querySelectorAll( 'lightning-input-field' );
        if ( inputFields ) {
            inputFields.forEach( field => {
                field.reset();
            } );
        }

    }
//caso o submit for acionado com sucesso vai chamar o showToast que nos mostra uma mensagem
    handleSuccess( event ) {
        
        console.log( 'Record Id is ' + event.detail.id );
        this.dispatchEvent(
            new ShowToastEvent( {
                title: 'Criar Oportunidade',
                message: 'Oportunidade criada com sucesso',
                variant: 'success',
                mode:'sticky'
            } )
        );

    }
    //criar mensagem de erro caso a portunidade não for criada
    handleErro(event){
        console.error('Erro para criar registro: ' + event.detail.message);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Erro ao Criar Registro',
                message: 'Erro ao criar registro verifique os campos',
                variant: 'error'
            })
        );
    }
    get imgCarrinho(){
        return banner1;
    }
}
  