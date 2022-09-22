import { Storage } from '@capacitor/storage'
export default async function ({ store, redirect }) {
  const token = await Storage.get({ key: 'token' })
  if (token.value == null || token.value == '') {
    redirect('/')
  }
}