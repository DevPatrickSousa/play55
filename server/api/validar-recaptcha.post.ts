export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { token, name, email, phone, birthDate, message } = body

    if (!token) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Token do reCAPTCHA é obrigatório'
      })
    }

    const recaptchaValidation = await validateRecaptchaToken(token)

    if (!recaptchaValidation.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validação do reCAPTCHA falhou'
      })
    }

    return {
      success: true,
      message: 'Mensagem enviada com sucesso!'
    }

  } catch (error: any) {
    console.error('Erro ao processar formulário:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erro interno do servidor'
    })
  }
})

async function validateRecaptchaToken(token: string) {
  return {
    success: true,
    score: 0.9,
    action: 'form_submit'
  }
} 