import { supabase } from '@/utils/supabaseClient';

// Inscrire un nouvel utilisateur avec OTP
export const inscription = async (phoneNumber, name, cni, birthDate, acceptTerms, ElecNumber) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: phoneNumber,
    });

    if (error) {
      console.error('Error during OTP sign-in:', error);
      throw new Error(error.message);
    }

    // Ajoutez les informations supplémentaires de l'utilisateur dans la base de données
    const { user } = data; 
    const { error: insertError } = await supabase
      .from('users')
      .insert([{ 
        phoneNumber, 
        name, 
        cni, 
        birthDate, 
        acceptTerms, 
        ElecNumber
      }]);

    if (insertError) {
      console.error('Error inserting user data:', insertError);
      throw new Error(insertError.message);
    }

    return data;
  } catch (error) {
    console.error('Error in inscription function:', error);
    throw error;
  }
};

// Vérifier l'OTP
export const verifyOTP = async (phoneNumber, otp) => {
  try {
    const { data, error } = await supabase.auth.verifyOtp({
      phone: phoneNumber,
      token: otp,
      type: 'sms'
    });

    //update the user's otp status
    const { user } = data;
    const { error: updateError } = await supabase
      .from('users')
      .update({ otp: otp,
       })
      .eq('phoneNumber', phoneNumber);
    

    if (error) {
      console.error('Error verifying OTP:', error);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error in verifyOTP function:', error);
    throw error;
  }
};
