type Props = {
  title?: string;
  name: string;
  email: string;
  message: string;
  phone?: number;
};

const baseView = ({
  email,
  message,
  name,
  phone,
  title = 'MC Ocidente Charmoso',
}: Props) => `

<h3>Novo Formulário de Contacto</h3>

<p>Recebeu um novo formulário de contacto de ${name}:</p>
<ul>
<li><strong>Nome:</strong> ${name}</li>
<li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
${
  phone
    ? `<li><strong>Contacto Telefónico:</strong> <a href="tel:${phone}">${phone}</a></li>`
    : ''
}
</ul>

<p style="margin-top: 20px;font-weight:bold;">Mensagem</p>
<p>${message}</p>


<p style="margin-top: 40px;">
    Ao seu dispor,<br />
    <strong>${title}</strong>.
</p>`;

export { baseView };
