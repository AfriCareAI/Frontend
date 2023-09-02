import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
});

const DiagnosticReportPDF = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Diagnostic Report</Text>
          <Text style={styles.subheader}>Medical History:</Text>
          <Text style={styles.text}>{data.medicalHistory}</Text>
          <Text style={styles.subheader}>Symptoms:</Text>
          <Text style={styles.text}>{data.symptoms}</Text>
          <Text style={styles.subheader}>Lab Results:</Text>
          <Text style={styles.text}>{data.labResults}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default DiagnosticReportPDF;
