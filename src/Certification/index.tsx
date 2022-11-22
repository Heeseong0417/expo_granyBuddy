import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMP from 'iamport-react-native';
import { getUserCode } from '../utils';
import Loading from '../Loading/index';

export default function Certification({ route, navigation }:any) {
  const params = route.params.params;
  const tierCode = route.params.tierCode;
  const userCode = getUserCode('danal', tierCode, 'certification');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <IMP.Certification
        userCode={userCode}
        tierCode={tierCode}
        data={params}
       
        callback={(response) =>
          navigation.replace('CertificationResult', response)
        }
      />
    </SafeAreaView>
  );
}
